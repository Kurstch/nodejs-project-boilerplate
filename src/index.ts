function sum(...nums: number[]): number {
    let result = 0;
    for (const num of nums) result += num;
    return result;
}

console.log(sum(10, 2, 4));

if (import.meta.vitest) {
    const { test, expect } = import.meta.vitest;

    test("sum", () => {
        expect(sum()).toBe(0);
        expect(sum(1)).toBe(1);
        expect(sum(1, 2, 3)).toBe(6);
    });
}
