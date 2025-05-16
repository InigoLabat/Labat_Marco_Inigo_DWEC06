export class Atleta {

    public id?: string;
    public createdAt?: string;
    public name: string;
    public club: string;
    public event: string;
    public mark: string;
    public birthDate: string;

    constructor(data: Partial<Atleta> = {}) {
        this.id = data.id;
        this.createdAt = data.createdAt || new Date().toISOString();
        this.name = data.name || '';
        this.club = data.club || '';
        this.event = data.event || '';
        this.mark = data.mark || '';
        this.birthDate = data.birthDate || ''
    }

    calcularEdad(): number {
        const nace = new Date(this.birthDate);
        const hoy = new Date();
        let edad = hoy.getFullYear() - nace.getFullYear();
        const m = hoy.getMonth() - nace.getMonth();

        if (m < 0 || (m === 0 && hoy.getDate() < nace.getDate())) {
        edad--;
        }

        return edad;
    }
}