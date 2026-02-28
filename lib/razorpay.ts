
"use client"

import { useEffect } from "react"

const RAZORPAY_SCRIPT = "https://checkout.razorpay.com/v1/checkout.js"

export function useRazorpay() {
    useEffect(() => {
        const script = document.createElement("script")
        script.src = RAZORPAY_SCRIPT
        script.async = true
        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    }, [])
}
