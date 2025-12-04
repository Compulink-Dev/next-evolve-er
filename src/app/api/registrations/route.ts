// app/api/registrations/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'

export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, PATCH, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}

export async function POST(request: NextRequest) {
  try {
    const payload = await getPayload({ config: configPromise })
    const data = await request.json()

    // Create registration
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
    const id = url.searchParams.get('id')

    if (id) {
      // Get single registration
      const registration = await payload.findByID({
        collection: 'registrations',
        id,
      })

      return NextResponse.json({
        success: true,
        doc: registration,
      })
    } else {
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
    }
  } catch (error: any) {
    console.error('Error fetching registrations:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch registrations' },
      { status: 500 },
    )
  }
}

// For PATCH requests to specific ID
export async function PATCH(request: NextRequest) {
  try {
    const payload = await getPayload({ config: configPromise })
    const url = new URL(request.url)
    const id = url.pathname.split('/').pop()
    const data = await request.json()

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Registration ID is required' },
        { status: 400 },
      )
    }

    const registration = await payload.update({
      collection: 'registrations',
      id,
      data,
    })

    return NextResponse.json({
      success: true,
      message: 'Registration updated successfully',
      doc: registration,
    })
  } catch (error: any) {
    console.error('Error updating registration:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to update registration' },
      { status: 500 },
    )
  }
}

// For DELETE requests to specific ID
export async function DELETE(request: NextRequest) {
  try {
    const payload = await getPayload({ config: configPromise })
    const url = new URL(request.url)
    const id = url.pathname.split('/').pop()

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Registration ID is required' },
        { status: 400 },
      )
    }

    await payload.delete({
      collection: 'registrations',
      id,
    })

    return NextResponse.json({
      success: true,
      message: 'Registration deleted successfully',
    })
  } catch (error: any) {
    console.error('Error deleting registration:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to delete registration' },
      { status: 500 },
    )
  }
}
