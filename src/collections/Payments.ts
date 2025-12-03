import { CollectionConfig } from 'payload'

export const Payments: CollectionConfig = {
  slug: 'payments',
  labels: {
    singular: 'Payment',
    plural: 'Payments',
  },
  admin: {
    useAsTitle: 'transactionId',
    defaultColumns: ['transactionId', 'registration', 'amount', 'status', 'createdAt'],
    group: 'Registrations',
  },
  fields: [
    {
      name: 'registration',
      type: 'relationship',
      label: 'Registration',
      relationTo: 'registrations',
      required: true,
      hasMany: false,
    },
    {
      name: 'transactionId',
      type: 'text',
      label: 'Transaction ID',
      unique: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'amount',
      type: 'number',
      label: 'Amount (USD)',
      required: true,
    },
    {
      name: 'currency',
      type: 'select',
      label: 'Currency',
      defaultValue: 'USD',
      options: [
        { label: 'USD', value: 'USD' },
        { label: 'ZWL', value: 'ZWL' },
      ],
    },
    {
      name: 'paymentMethod',
      type: 'select',
      label: 'Payment Method',
      required: true,
      options: [
        { label: 'Credit/Debit Card', value: 'card' },
        { label: 'Mobile Money', value: 'mobile' },
        { label: 'Bank Transfer', value: 'bank' },
        { label: 'Cash', value: 'cash' },
      ],
    },
    {
      name: 'status',
      type: 'select',
      label: 'Payment Status',
      defaultValue: 'pending',
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Processing', value: 'processing' },
        { label: 'Completed', value: 'completed' },
        { label: 'Failed', value: 'failed' },
        { label: 'Refunded', value: 'refunded' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'paymentProof',
      type: 'upload',
      label: 'Payment Proof',
      relationTo: 'media',
    },
    {
      name: 'mobileMoneyDetails',
      type: 'group',
      label: 'Mobile Money Details',
      admin: {
        condition: (data) => data.paymentMethod === 'mobile',
      },
      fields: [
        {
          name: 'provider',
          type: 'select',
          label: 'Provider',
          options: [
            { label: 'EcoCash', value: 'ecocash' },
            { label: 'OneMoney', value: 'onemoney' },
            { label: 'Telecash', value: 'telecash' },
          ],
        },
        {
          name: 'phoneNumber',
          type: 'text',
          label: 'Phone Number',
        },
        {
          name: 'transactionCode',
          type: 'text',
          label: 'Transaction Code',
        },
      ],
    },
    {
      name: 'bankTransferDetails',
      type: 'group',
      label: 'Bank Transfer Details',
      admin: {
        condition: (data) => data.paymentMethod === 'bank',
      },
      fields: [
        {
          name: 'bankName',
          type: 'text',
          label: 'Bank Name',
        },
        {
          name: 'accountNumber',
          type: 'text',
          label: 'Account Number',
        },
        {
          name: 'reference',
          type: 'text',
          label: 'Reference',
        },
      ],
    },
    {
      name: 'notes',
      type: 'textarea',
      label: 'Notes',
    },
  ],
  timestamps: true,
  hooks: {
    beforeChange: [
      async ({ data, operation }) => {
        if (operation === 'create') {
          // Generate transaction ID
          const transactionId =
            'TXN-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9).toUpperCase()
          data.transactionId = transactionId
        }
        return data
      },
    ],
  },
}
