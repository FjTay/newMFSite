const TeaHelper = {
    origin : (origin) => {
        switch (origin) {
            case 1.1:
                origin = "Assam";
                break;
            case 2:
                origin = "Chine";
                break;
            case 2.5:
                origin = "Formose";
                break;
            case 1.2:
                origin = "Darjeeling";
                break;
            case 3:
                origin = "Ceylan";
                break;
            case 4:
                origin = "Japon";
                break;
            default:
                origin = "";
        }
        return origin
    },
    teaColor : (teaColor) => {
        switch (teaColor) {
            case 1:
                teaColor = "Thé Noir";
                break;
            case 2:
                teaColor = "Thé Vert";
                break;
            case 2.1:
                teaColor = "Thé Jaune";
                break;
            case 3:
                teaColor = "Thé Blanc";
                break;
            case 4:
                teaColor = "Thé Bleu";
                break;
            case 5:
                teaColor = "Rooibos";
                break;
            case 6:
                teaColor = "Infusion";
                break;
            case 7:
                teaColor = "Thé mûr";
                break;
            default:
                teaColor = "";
        }
        return teaColor
    },
    jardinPremier : (jardinPremier) => {
        switch (jardinPremier) {
            case true:
                jardinPremier = "Jardin Premier";
                break;
            default:
                jardinPremier = "";
        }
        return jardinPremier
    },
    flavour : (flavour) => {
        switch (flavour) {
            case "redFruits":
                flavour = "Fruits Rouges";
                break;
            case "jasmin":
                flavour = "Jasmin";
                break;
            case "chinaFruits":
                flavour = "Fruits de Chine";
                break;
            default:
                flavour = "";
        }
        return flavour
    },
    flavoured : (flavoured) => {
        switch (flavoured) {
            case true:
                flavoured = "Thé Parfumé";
                break;
            default:
                flavoured = "";
        }
        return flavoured
    },
    region : (region) => {
        switch (region) {
            case "anhui":
                region= "Anhui"
                break;
            case "sichuan":
                region= "Sichuan"
                break;
            case "himachalPradesh":
                region= "Himachal Pradesh"
                break;
            default:
                region = "";
        }
        return region
    },
    family : (family) => {
        switch (family) {
            case "theDException":
                family= "Thé d'Exception"
                break;
            case "thePrecieux":
                family= "Thé Précieux"
                break;
            case "grandCru":
                family= "Grand Cru"
                break;
            default:
                family = "";
        }
        return family
    },
    packaging : (packaging) => {
        switch (packaging) {
            case "T":
                packaging= "Thé au Poids"
                break;
            case "TB":
                packaging= "Mousseline de Thé"
                break;
            case "TC":
                packaging= "Boîte Icône"
                break;
            case "TFBF":
                packaging= "Flacon Boule"
                break;
            case "TA":
                packaging= "Flacon Collector"
                break;
            default:
                packaging = "";
        }
        return packaging
    },
    collection : (collection) => {
        switch (collection) {
            case "marcoPolo":
                collection= "Marco Polo"
                break;
            default:
                collection = "";
        }
        return collection
    }
}

export default TeaHelper;