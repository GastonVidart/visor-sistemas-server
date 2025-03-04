export interface Sistema {
  id: string;
  nombre: string;
  descripcion?: string;
  conectado: string[];
  tipo: string;
  tecnologias?: string[];
  entorno?: string[];
}
