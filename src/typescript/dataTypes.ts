export interface FormData {
	planes: boolean;
	cars: boolean;
	boats: boolean;
	miles: {
		planes: number | null;
		cars: number | null;
		boats: number | null;
	}
}