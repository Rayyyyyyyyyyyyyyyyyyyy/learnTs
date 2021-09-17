class LazySingletonPerson {
    private constructor(
        public readonly name: string,
        public readonly age: number,
        public readonly hasPet: boolean
    ) { }
    private static Instance: LazySingletonPerson | null = null

    static getInstance(): LazySingletonPerson {
        if (this.Instance == null) {
            this.Instance = new LazySingletonPerson("maxwll", 20, true)

        }
        return this.Instance
    }
}