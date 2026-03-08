import { useState } from 'react'
import styled from 'styled-components'

const FormEl = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: 420px;
`

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  font-size: ${(p) => p.theme.fontSizes.sm};
  color: ${(p) => p.theme.colors.text};
`

const Input = styled.input`
  padding: 0.65rem 0.9rem;
  font-size: 1rem;
  font-family: inherit;
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: ${(p) => p.theme.radii.sm};
  background: ${(p) => p.theme.colors.surfaceElevated};
  color: ${(p) => p.theme.colors.text};
  transition: border-color 0.2s, box-shadow 0.2s;
  &::placeholder {
    color: ${(p) => p.theme.colors.textMuted};
  }
  &:focus {
    outline: none;
    border-color: ${(p) => p.theme.colors.accent};
    box-shadow: 0 0 0 3px rgba(255, 159, 28, 0.2);
  }
`

const Textarea = styled.textarea`
  padding: 0.65rem 0.9rem;
  font-size: 1rem;
  font-family: inherit;
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: ${(p) => p.theme.radii.sm};
  background: ${(p) => p.theme.colors.surfaceElevated};
  color: ${(p) => p.theme.colors.text};
  min-height: 120px;
  resize: vertical;
  transition: border-color 0.2s, box-shadow 0.2s;
  &::placeholder {
    color: ${(p) => p.theme.colors.textMuted};
  }
  &:focus {
    outline: none;
    border-color: ${(p) => p.theme.colors.accent};
    box-shadow: 0 0 0 3px rgba(255, 159, 28, 0.2);
  }
`

const SubmitBtn = styled.button`
  padding: 0.7rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  font-family: inherit;
  background: ${(p) => p.theme.colors.accent};
  color: ${(p) => p.theme.colors.primary};
  border: none;
  border-radius: ${(p) => p.theme.radii.sm};
  cursor: pointer;
  align-self: flex-start;
  transition: background 0.2s, transform 0.2s;
  &:hover {
    background: ${(p) => p.theme.colors.accentHover};
    transform: translateY(-1px);
  }
  &:focus-visible {
    outline: 2px solid ${(p) => p.theme.colors.text};
    outline-offset: 2px;
  }
`

const SuccessMessage = styled.p`
  color: ${(p) => p.theme.colors.success};
  font-weight: 600;
  font-size: ${(p) => p.theme.fontSizes.md};
`

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return <SuccessMessage>Thanks for submitting!</SuccessMessage>
  }

  return (
    <FormEl onSubmit={handleSubmit}>
      <Label>
        Name
        <Input type="text" name="name" required placeholder="Your name" />
      </Label>
      <Label>
        Email
        <Input type="email" name="email" required placeholder="your@email.com" />
      </Label>
      <Label>
        Message
        <Textarea name="message" required placeholder="How can we help?" />
      </Label>
      <SubmitBtn type="submit">Submit</SubmitBtn>
    </FormEl>
  )
}
