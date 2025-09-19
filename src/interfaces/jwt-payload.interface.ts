export interface JwtPayload {
  id: string; //* Yo Andrés no recomiendo mandar un id porque pueden saber como aparece en DB
  email: string;
  name: string;
}
