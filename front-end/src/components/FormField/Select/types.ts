import { ChangeEvent } from "react"

export type SelectProps = {
  selectLabel: string
  selectName: string
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

export type SelectOptionProps = {
  optionName: string
  optionId: number
}
