# Formularios y Validación - Inte Sistemas

## Formulario de Contacto

### Estructura Completa

```tsx
// components/forms/ContactForm.tsx
'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Button } from '@/components/ui/Button'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const t = useTranslations('contact')
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<FormStatus>('idle')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Nombre
    if (!formData.name.trim()) {
      newErrors.name = t('errors.nameRequired')
    } else if (formData.name.trim().length < 2) {
      newErrors.name = t('errors.nameTooShort')
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = t('errors.emailRequired')
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = t('errors.emailInvalid')
    }

    // Teléfono (opcional pero validado si se proporciona)
    if (formData.phone && !/^[+]?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = t('errors.phoneInvalid')
    }

    // Mensaje
    if (!formData.message.trim()) {
      newErrors.message = t('errors.messageRequired')
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t('errors.messageTooShort')
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validar
    if (!validateForm()) {
      return
    }

    setStatus('submitting')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setStatus('success')
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      })
    } catch (error) {
      console.error('Error sending message:', error)
      setStatus('error')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Limpiar error del campo al escribir
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Success Message */}
      {status === 'success' && (
        <div className="rounded-lg bg-success-light p-4 text-success-dark">
          <p className="font-medium">{t('successMessage')}</p>
        </div>
      )}

      {/* Error Message */}
      {status === 'error' && (
        <div className="rounded-lg bg-error-light p-4 text-error-dark">
          <p className="font-medium">{t('errorMessage')}</p>
        </div>
      )}

      {/* Form Fields */}
      <div className="grid gap-6 md:grid-cols-2">
        <Input
          label={t('fields.name')}
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          placeholder={t('placeholders.name')}
          required
        />

        <Input
          label={t('fields.email')}
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          placeholder={t('placeholders.email')}
          required
        />

        <Input
          label={t('fields.phone')}
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
          placeholder={t('placeholders.phone')}
        />

        <Input
          label={t('fields.company')}
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder={t('placeholders.company')}
        />
      </div>

      <Textarea
        label={t('fields.message')}
        name="message"
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        placeholder={t('placeholders.message')}
        rows={6}
        required
      />

      {/* Privacy Checkbox */}
      <label className="flex items-start space-x-3">
        <input
          type="checkbox"
          required
          className="mt-1 h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
        />
        <span className="text-sm text-gray-600">
          {t('privacyText')}{' '}
          <a
            href="/legal/privacy"
            className="text-primary-600 hover:underline"
            target="_blank"
          >
            {t('privacyLink')}
          </a>
        </span>
      </label>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full md:w-auto"
        isLoading={status === 'submitting'}
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? t('sending') : t('submit')}
      </Button>
    </form>
  )
}
```

---

## API Route

### Endpoint de Contacto

```ts
// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '@/lib/email/send'

interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  message: string
}

// Validación server-side
function validateFormData(data: ContactFormData): {
  valid: boolean
  errors: string[]
} {
  const errors: string[] = []

  if (!data.name || data.name.trim().length < 2) {
    errors.push('Name is required and must be at least 2 characters')
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!data.email || !emailRegex.test(data.email)) {
    errors.push('Valid email is required')
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.push('Message is required and must be at least 10 characters')
  }

  return {
    valid: errors.length === 0,
    errors,
  }
}

// Sanitización básica
function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remover < y >
    .substring(0, 1000) // Limitar longitud
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json()

    // Validar
    const validation = validateFormData(data)
    if (!validation.valid) {
      return NextResponse.json(
        { error: 'Validation failed', errors: validation.errors },
        { status: 400 }
      )
    }

    // Sanitizar
    const sanitizedData = {
      name: sanitizeInput(data.name),
      email: sanitizeInput(data.email),
      phone: data.phone ? sanitizeInput(data.phone) : '',
      company: data.company ? sanitizeInput(data.company) : '',
      message: sanitizeInput(data.message),
    }

    // Enviar email
    await sendEmail({
      to: process.env.CONTACT_EMAIL || 'info@intesistemas.com',
      subject: `Nuevo contacto de ${sanitizedData.name}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${sanitizedData.name}</p>
        <p><strong>Email:</strong> ${sanitizedData.email}</p>
        ${sanitizedData.phone ? `<p><strong>Teléfono:</strong> ${sanitizedData.phone}</p>` : ''}
        ${sanitizedData.company ? `<p><strong>Empresa:</strong> ${sanitizedData.company}</p>` : ''}
        <p><strong>Mensaje:</strong></p>
        <p>${sanitizedData.message.replace(/\n/g, '<br>')}</p>
      `,
    })

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
```

---

## Servicio de Email

### Opción 1: Resend (Recomendado)

```bash
npm install resend
```

```ts
// lib/email/send.ts
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface SendEmailOptions {
  to: string
  subject: string
  html: string
  from?: string
}

export async function sendEmail({
  to,
  subject,
  html,
  from = 'noreply@intesistemas.com',
}: SendEmailOptions) {
  try {
    const data = await resend.emails.send({
      from,
      to,
      subject,
      html,
    })

    return { success: true, data }
  } catch (error) {
    console.error('Error sending email:', error)
    throw new Error('Failed to send email')
  }
}
```

### Opción 2: Nodemailer

```bash
npm install nodemailer
npm install -D @types/nodemailer
```

```ts
// lib/email/send.ts
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

interface SendEmailOptions {
  to: string
  subject: string
  html: string
  from?: string
}

export async function sendEmail({
  to,
  subject,
  html,
  from = process.env.SMTP_FROM || 'noreply@intesistemas.com',
}: SendEmailOptions) {
  try {
    const info = await transporter.sendMail({
      from,
      to,
      subject,
      html,
    })

    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('Error sending email:', error)
    throw new Error('Failed to send email')
  }
}
```

---

## Variables de Entorno

```env
# .env.local

# Resend (opción 1)
RESEND_API_KEY=re_xxxxxxxxxxxx

# Nodemailer (opción 2)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=tu@email.com
SMTP_PASS=tu_password
SMTP_FROM=noreply@intesistemas.com

# Destinatario contacto
CONTACT_EMAIL=info@intesistemas.com
```

---

## Traducciones

```json
// public/locales/es/contact.json
{
  "fields": {
    "name": "Nombre",
    "email": "Email",
    "phone": "Teléfono",
    "company": "Empresa",
    "message": "Mensaje"
  },
  "placeholders": {
    "name": "Tu nombre completo",
    "email": "tu@email.com",
    "phone": "+34 XXX XXX XXX",
    "company": "Nombre de tu empresa (opcional)",
    "message": "Cuéntanos sobre tu proyecto..."
  },
  "errors": {
    "nameRequired": "El nombre es obligatorio",
    "nameTooShort": "El nombre debe tener al menos 2 caracteres",
    "emailRequired": "El email es obligatorio",
    "emailInvalid": "Por favor ingresa un email válido",
    "phoneInvalid": "Por favor ingresa un teléfono válido",
    "messageRequired": "El mensaje es obligatorio",
    "messageTooShort": "El mensaje debe tener al menos 10 caracteres"
  },
  "submit": "Enviar mensaje",
  "sending": "Enviando...",
  "successMessage": "¡Gracias! Hemos recibido tu mensaje y te contactaremos pronto.",
  "errorMessage": "Hubo un error al enviar el mensaje. Por favor intenta de nuevo.",
  "privacyText": "Acepto la",
  "privacyLink": "Política de Privacidad"
}
```

```json
// public/locales/en/contact.json
{
  "fields": {
    "name": "Name",
    "email": "Email",
    "phone": "Phone",
    "company": "Company",
    "message": "Message"
  },
  "placeholders": {
    "name": "Your full name",
    "email": "you@email.com",
    "phone": "+1 XXX XXX XXXX",
    "company": "Your company name (optional)",
    "message": "Tell us about your project..."
  },
  "errors": {
    "nameRequired": "Name is required",
    "nameTooShort": "Name must be at least 2 characters",
    "emailRequired": "Email is required",
    "emailInvalid": "Please enter a valid email",
    "phoneInvalid": "Please enter a valid phone number",
    "messageRequired": "Message is required",
    "messageTooShort": "Message must be at least 10 characters"
  },
  "submit": "Send message",
  "sending": "Sending...",
  "successMessage": "Thank you! We've received your message and will contact you soon.",
  "errorMessage": "There was an error sending the message. Please try again.",
  "privacyText": "I accept the",
  "privacyLink": "Privacy Policy"
}
```

---

## Validación Avanzada

### Librería Zod (Opcional)

```bash
npm install zod
```

```ts
// lib/validation/schemas.ts
import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z
    .string()
    .regex(/^[+]?[\d\s-()]+$/, 'Invalid phone number')
    .optional()
    .or(z.literal('')),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
```

```tsx
// En el componente
import { contactFormSchema } from '@/lib/validation/schemas'

const validateForm = (): boolean => {
  try {
    contactFormSchema.parse(formData)
    setErrors({})
    return true
  } catch (error) {
    if (error instanceof z.ZodError) {
      const newErrors: FormErrors = {}
      error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormErrors
        newErrors[field] = err.message
      })
      setErrors(newErrors)
    }
    return false
  }
}
```

---

## Rate Limiting (Opcional)

```bash
npm install @upstash/ratelimit @upstash/redis
```

```ts
// lib/ratelimit.ts
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

export const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, '1 h'), // 5 requests per hour
  analytics: true,
})
```

```ts
// En API route
import { ratelimit } from '@/lib/ratelimit'

export async function POST(request: NextRequest) {
  // Rate limiting por IP
  const ip = request.ip ?? '127.0.0.1'
  const { success } = await ratelimit.limit(ip)

  if (!success) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    )
  }

  // Continuar con lógica normal...
}
```

---

## Honeypot (Anti-spam)

```tsx
// Añadir campo oculto al formulario
<input
  type="text"
  name="honeypot"
  value={formData.honeypot}
  onChange={handleChange}
  style={{ display: 'none' }}
  tabIndex={-1}
  autoComplete="off"
/>
```

```ts
// En API route
export async function POST(request: NextRequest) {
  const data = await request.json()

  // Si el honeypot está lleno, es un bot
  if (data.honeypot) {
    return NextResponse.json(
      { message: 'Success' }, // Fingir éxito
      { status: 200 }
    )
  }

  // Continuar con lógica normal...
}
```

---

## Testing

```tsx
// __tests__/ContactForm.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { ContactForm } from '@/components/forms/ContactForm'

describe('ContactForm', () => {
  it('renders all form fields', () => {
    render(<ContactForm />)

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
  })

  it('shows validation errors', async () => {
    render(<ContactForm />)

    const submitButton = screen.getByRole('button', { name: /send/i })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText(/name is required/i)).toBeInTheDocument()
      expect(screen.getByText(/email is required/i)).toBeInTheDocument()
    })
  })

  it('submits form with valid data', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ success: true }),
      })
    ) as jest.Mock

    render(<ContactForm />)

    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'John Doe' },
    })
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'john@example.com' },
    })
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: 'This is a test message' },
    })

    const submitButton = screen.getByRole('button', { name: /send/i })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith('/api/contact', expect.any(Object))
    })
  })
})
```

---

## Checklist

- [ ] Validación client-side implementada
- [ ] Validación server-side en API route
- [ ] Sanitización de inputs
- [ ] Mensajes de error traducidos
- [ ] Loading state durante envío
- [ ] Mensajes de éxito/error
- [ ] Rate limiting configurado
- [ ] Honeypot anti-spam
- [ ] Checkbox de privacidad
- [ ] Email enviado correctamente
- [ ] Responsive design
- [ ] Accesibilidad (labels, ARIA)
- [ ] Tests escritos

---

**Fecha:** 2025-11-21
