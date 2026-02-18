
export interface Pet {
  id: string;
  name: string;
  age: number;
  gender: string;
  description: string;
  imageUrl: string;
}


export interface ApiResponse {
  success: boolean;
  data: Pet[];
  count: number;
  total: number;
}


export const MOCK_API_PETS: ApiResponse = {
  "success": true,
  "data": [
    {
      "id": "dcc0642f-c09c-413e-bb0d-c210ecdfa35b",
      "name": "Bruno",
      "age": 3,
      "gender": "female",
      "description": "A mischievous little rascal who can't resist stealing socks and hiding them.",
      "imageUrl": "https://images.dog.ceo/breeds/bulldog-french/n02108915_5201.jpg"
    },
    {
      "id": "d4a2e04b-97dd-4e3d-bd6b-8f08e351e261",
      "name": "Luna",
      "age": 2,
      "gender": "female",
      "description": "A personal trainer who insists on daily walks and play sessions.",
      "imageUrl": "https://images.dog.ceo/breeds/terrier-tibetan/n02097474_2859.jpg"
    },
    {
      "id": "9cf1567c-f7ea-4de8-9a03-1d55feed233e",
      "name": "Cooper",
      "age": 1,
      "gender": "female",
      "description": "A gentle giant with a heart of gold and a talent for finding the comfiest spots.",
      "imageUrl": "https://images.dog.ceo/breeds/spitz-indian/Indian_Spitz.jpg"
    },
    {
      "id": "edcc6d3f-e9ee-45fc-b556-42ed70354ece",
      "name": "Thor",
      "age": 1,
      "gender": "male",
      "description": "A comedian who knows exactly when to do something silly to make you smile.",
      "imageUrl": "https://images.dog.ceo/breeds/terrier-silky/n02097658_7445.jpg"
    },
    {
      "id": "493ea182-f0da-4446-b313-09c4f468994c",
      "name": "Murphy",
      "age": 11,
      "gender": "female",
      "description": "A personal trainer who insists on daily walks and play sessions.",
      "imageUrl": "https://images.dog.ceo/breeds/schnauzer-giant/n02097130_2907.jpg"
    },
    {
      "id": "1d4394b2-34cf-4120-9013-f2c3573ed0c5",
      "name": "Pepper",
      "age": 10,
      "gender": "male",
      "description": "A comedian who knows exactly how to make their humans laugh.",
      "imageUrl": "https://images.dog.ceo/breeds/mudhol-indian/Indian-Mudhol.jpg"
    },
    {
      "id": "bc14b37b-3645-416f-a9b2-3dbbcf678ac5",
      "name": "Jake",
      "age": 4,
      "gender": "female",
      "description": "A professional nap taker with a PhD in relaxation.",
      "imageUrl": "https://images.dog.ceo/breeds/terrier-american/n02093428_1439.jpg"
    },
    {
      "id": "98a708e1-326e-496b-a016-4558abb0673c",
      "name": "Shadow",
      "age": 15,
      "gender": "female",
      "description": "A toy collector who has a secret stash under every piece of furniture.",
      "imageUrl": "https://images.dog.ceo/breeds/terrier-westhighland/n02098286_4106.jpg"
    },
    {
      "id": "76255a18-bfc5-42b5-963c-95c307197af7",
      "name": "Lily",
      "age": 9,
      "gender": "male",
      "description": "A comedian who knows exactly how to make their humans laugh.",
      "imageUrl": "https://images.dog.ceo/breeds/whippet/n02091134_13348.jpg"
    },
    {
      "id": "d6357f35-14bc-46cd-9b3d-a8df4078c63f",
      "name": "Stella",
      "age": 5,
      "gender": "female",
      "description": "A speed demon who thinks every walk is a race against time.",
      "imageUrl": "https://images.dog.ceo/breeds/pointer-germanlonghair/hans4.jpg"
    }
  ],
  "count": 10,
  "total": 10
};