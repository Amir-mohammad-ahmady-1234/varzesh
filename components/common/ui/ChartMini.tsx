/** UI-only mini chart component using SVG */
interface ChartMiniProps {
  data: number[]
  width?: number
  height?: number
  color?: string
}

export default function ChartMini({ data, width = 60, height = 30, color = "var(--primary)" }: ChartMiniProps) {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1

  const points = data
    .map((value, index) => {
      const x = (index / (data.length - 1)) * width
      const y = height - ((value - min) / range) * height
      return `${x},${y}`
    })
    .join(" ")

  return (
    <svg width={width} height={height} className="text-(--primary)">
      <polyline fill="none" stroke={color} strokeWidth="2" points={points} />
    </svg>
  )
}
