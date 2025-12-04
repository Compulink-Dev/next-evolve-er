// app/api/registrations/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'

export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}

export async function POST(request: NextRequest) {
  try {
    const payload = await getPayload({ config: configPromise })
    const data = await request.json()

    const registration = await payload.create({
      collection: 'registrations',
      data: {
        ...data,
        status: data.status || 'pending',
      },
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Registration created successfully',
        doc: registration,
      },
      { status: 201 },
    )
  } catch (error: any) {
    console.error('Error creating registration:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to create registration' },
      { status: 500 },
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const payload = await getPayload({ config: configPromise })
    const url = new URL(request.url)

    // Remove the single registration logic from here
    // Get all registrations (with pagination)
    const page = parseInt(url.searchParams.get('page') || '1')
    const limit = parseInt(url.searchParams.get('limit') || '10')

    const registrations = await payload.find({
      collection: 'registrations',
      limit,
      page,
      sort: '-createdAt',
    })

    return NextResponse.json({
      success: true,
      ...registrations,
    })
  } catch (error: any) {
    console.error('Error fetching registrations:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch registrations' },
      { status: 500 },
    )
  }
}
