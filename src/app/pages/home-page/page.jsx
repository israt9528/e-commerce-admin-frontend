'use client'
import React from 'react'
import PreviewPanel from '@/Components/Builder/PreviewPanel'
import SelectionPanel from '@/Components/Builder/SelectionPanel'
import VarientsPanel from '@/Components/Builder/VarientsPanel'

const HomePage = () => {
  return (
    <div className="grid h-screen grid-cols-[260px_1fr_350px]">
      <SelectionPanel />
      <PreviewPanel />
      <VarientsPanel />
    </div>
  )
}

export default HomePage