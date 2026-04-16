import CheckoutComponent from '@/components/CheckoutComponent'
import React, { Suspense } from 'react'

export default function page() {
  return (
    <Suspense fallback={<div className="p-6">Carregando...</div>}>
      <CheckoutComponent />
    </Suspense>
  )
}
