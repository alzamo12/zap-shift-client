const calculateCost = (type, weight) => {
    console.log(type, weight)
    const base = type === 'document' ? 50 : 100;
    const perKg = type === 'document' ? 0 : 20;
    return  {
        cost: base + perKg * weight,
        base,
        perKg
    }
};
export default calculateCost