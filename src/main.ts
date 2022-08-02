import './style.css'
import { argbFromHex, themeFromSourceColor, applyTheme } from "@material/material-color-utilities"

const col1 = document.querySelector<HTMLDivElement>('.col1')!
const col2 = document.querySelector<HTMLDivElement>('.col2')!
const col3 = document.querySelector<HTMLDivElement>('.col3')!
const col4 = document.querySelector<HTMLDivElement>('.col4')!
const col5 = document.querySelector<HTMLDivElement>('.col5')!
const col6 = document.querySelector<HTMLDivElement>('.col6')!

col1.style.backgroundColor = "var(--md-sys-color-primary)"
col2.style.backgroundColor = "var(--md-sys-color-on-primary)"
col3.style.backgroundColor = "var(--md-sys-color-secondary)"
col4.style.backgroundColor = "var(--md-sys-color-on-secondary)"
col5.style.backgroundColor = "var(--md-sys-color-tertiary)"
col6.style.backgroundColor = "var(--md-sys-color-on-tertiary)"

const isDarkOn = document.getElementById("dark") as HTMLInputElement
const color = document.getElementById("colr") as HTMLInputElement

color.addEventListener("input", () => {
  const hex = color.value
  const theme = themeFromSourceColor(argbFromHex(hex), [
    {
      name: "custom-1",
      value: argbFromHex("#ff0000"),
      blend: true,
    },
  ]);

  const systemTheme = isDarkOn.checked ? window.matchMedia("(prefers-color-scheme: dark)").matches : window.matchMedia("(prefers-color-scheme: light)").matches

  applyTheme(theme, { target: document.body, dark: systemTheme })

  isDarkOn.addEventListener("input", () => {
    const systemTheme = isDarkOn.checked ? window.matchMedia("(prefers-color-scheme: dark)").matches : window.matchMedia("(prefers-color-scheme: light)").matches

    applyTheme(theme, { target: document.body, dark: systemTheme })
  })

})
