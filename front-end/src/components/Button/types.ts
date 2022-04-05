export type ButtonProps = {
  onClick?: () => void
  text: string
  type?: "button" | "submit" | "reset" | undefined
};