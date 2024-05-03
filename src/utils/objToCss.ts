export const toCssTextColor = (textColor:string) => {
    return textColor.startsWith("text-")
      ? textColor
      : `text-[${textColor}]`
}

export const toCssBg = (bg:string) => {
    return bg.startsWith("bg-") ? bg : `bg-[${bg}]`
}
