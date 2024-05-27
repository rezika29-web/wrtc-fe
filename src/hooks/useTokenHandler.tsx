import { notification } from 'antd'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

function useTokenHandler(key: 'userToken' | 'apiToken') {
  const router = useRouter()
  const [token, setToken] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      const storageToken = localStorage.getItem(key)
      return storageToken || null
    }
    return null
  })

  const saveToken = (newToken: string) => {
    localStorage.setItem(key, newToken)
    setToken(newToken)
  }

  const deleteToken = (direction) => {
    localStorage.removeItem(key)
    setToken(null)
    router.push(direction || '/').then(() => {
      notification.success({ message: 'Logout successfully' })
    })
  }

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key) {
        setToken(e.newValue)
      }
    }

    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [key])

  return { token, saveToken, deleteToken }
}

export default useTokenHandler
