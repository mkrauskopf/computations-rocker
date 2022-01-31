import * as S from './styled'

const modulesColors = [
  { id: 'layout', color: 'hsl(39deg 100% 87%)', border: 'hsl(39deg 100% 50%)' },
  { id: 'board', color: 'hsl(182deg 25% 85%)', border: 'hsl(182deg 25% 50%)' },
  { id: 'fibonacci', color: 'hsl(219deg 79% 81%)', border: 'hsl(219deg 79% 66%)' },
  { id: 'legend', color: 'hsl(172deg 78% 93%)', border: 'hsl(172deg 78% 72%)' },
]

const Legend = () => {
  return (
    <S.Legend>
      <div>Modules color coding</div>
      <S.Modules>
        {modulesColors.map((moduleColor) => (
          <div
            key={moduleColor.id}
            className='colorBox'
            style={{ backgroundColor: moduleColor.color, border: `2px solid ${moduleColor.border}` }}
          >
            {moduleColor.id}
          </div>
        ))}
      </S.Modules>
    </S.Legend>
  )
}

export default Legend
