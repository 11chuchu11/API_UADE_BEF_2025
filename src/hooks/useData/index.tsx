import React from 'react'

import { DataContext } from '@/context/DataProvider'

const useData = () => {
  const context = React.useContext(DataContext)
  if (!context) {
    throw new Error('useData must be used within a DataProvider')
  }

    const updateData = (dataToUpdate: object) => {
      context.setData((prev:object) => ({
        ...prev,
        ...dataToUpdate
      }))
    }

  return { data: context.data, updateData }
}

export default useData