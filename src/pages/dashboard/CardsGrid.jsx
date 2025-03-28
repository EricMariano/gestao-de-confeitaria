function CardsData({ title, value, description }) {
  return (
    <div>
      <div className="w-full h-34 bg-[var(--bg-primary-site)] mb-5 border border-white/40 shadow-md rounded-xl p-4">
        <p className="font-semibold text-[var(--color-text-site)] mb-2">
          {title}
        </p>
        <span className="font-bold text-2xl text-[var(--color-text-site)]">
          {value}
        </span>
        <p className="text-xs text-muted-foreground text-[var(--color-text-site)] mt-2">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function CardsGrid() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        <CardsData
          title="Total Vendido (R$)"
          value="R$ 37.500"
          description="Nos últimos 6 meses"
        />

        <CardsData
          title="Pedidos Realizados"
          value="150"
          description="Nos últimos 6 meses"
        />

        <CardsData
          title="Ingredientes Utilizados"
          value="320"
          description="Nos últimos 6 meses"
        />

        <CardsData
          title="Receitas Criadas"
          value="45"
          description="Nos últimos 6 meses"
        />
      </div>
    </>
  );
}