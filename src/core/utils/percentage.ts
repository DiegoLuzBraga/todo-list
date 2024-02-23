export const percentageCalc = (needed: number, total: number): number => {
    return Number(((needed / total) * 100).toFixed(2).replace('.00', '')) || 0;
}