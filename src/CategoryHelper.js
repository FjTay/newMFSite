const CategoryHelper = {
    getCategory : (category) => {
        switch (category) {
            case "grandCru":
                category = "Grand Cru";
                break;
            case "teaClub":
                category = "Tea Club";
                break;
            default:
                category = "";
        }
        return category
    }
}

export default CategoryHelper;