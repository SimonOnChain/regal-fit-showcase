import RoyalPageTemplate from "@/components/RoyalPageTemplate";
import footballField1 from "@/assets/football-field-1.jpg";

const Foot = () => {
  const handlePrimaryAction = () => {
    window.location.href = "/plannings";
  };

  return (
    <RoyalPageTemplate
      heroImage={footballField1}
      title="FOOT À 5"
      subtitle="Nos terrains certifiés FIFA vous attendent"
      description="Trois terrains de Foot à 5 avec gazon synthétique certifiés FIFA. Le centre de vos exploits sportifs avec de nombreux tournois régionaux."
      primaryCTA={{
        text: "Réserver un terrain",
        action: handlePrimaryAction
      }}
    />
  );
};

export default Foot;