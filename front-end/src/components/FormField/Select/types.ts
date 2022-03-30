import { ChangeEvent } from "react"

export type SelectProps = {
  selectLabel: string
  selectName: string
  required?: boolean
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

export type SelectOptionProps = {
  optionName: string
  optionId: number
}
