import faker from 'faker';

export default function generateFakeItem(){
    const fakeItem = {
        name:faker.commerce.productName(),
        description:faker.commerce.productDescription(),
        price:Number(faker.commerce.price()),
        img:faker.image.imageUrl()
    };

    return fakeItem;
}