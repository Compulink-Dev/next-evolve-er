// app/api/payments/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'

export async function POST(request: NextRequest) {
  try {
    const payload = await getPayload({ config: configPromise })
    const data = await request.json()

    // Validate required fields
    if (!data.registration || !data.amount || !data.paymentMethod) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 },
      )
    }

    // Create payment
    const payment = await payload.create({
      collection: 'payments',
      data: {
        ...data,
        status: data.status || 'pending',
        currency: data.currency || 'USD',
      },
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Payment created successfully',
        doc: payment,
      },
      { status: 201 },
    )
  } catch (error: any) {
    console.error('Error creating payment:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to create payment' },
      { status: 500 },
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const payload = await getPayload({ config: configPromise })
    const url = new URL(request.url)
    const registrationId = url.searchParams.get('registration')

    if (registrationId) {
      // Get payments for specific registration
      const payments = await payload.find({
        collection: 'payments',
        where: {
          registration: {
            equals: registrationId,
          },
        },
        sort: '-createdAt',
      })

      return NextResponse.json({
        success: true,
        ...payments,
      })
    } else {
      // Get all payments (admin only)
      const page = parseInt(url.searchParams.get('page') || '1')
      const limit = parseInt(url.searchParams.get('limit') || '10')

      const payments = await payload.find({
        collection: 'payments',
        limit,
        page,
        sort: '-createdAt',
      })

      return NextResponse.json({
        success: true,
        ...payments,
      })
    }
  } catch (error: any) {
    console.error('Error fetching payments:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch payments' },
      { status: 500 },
    )
  }
}
