import {
  Container,
  Title,
  TopBar,
  Filters,
  ProductCard,
  ProductsGroupList,
} from '@/components/shared';

export default function Home() {
  return (
    <>
      <Container className='mt-10'>
        <Title text='Все пиццы' size='lg' className='font-extrabold' />
      </Container>

      <TopBar />

      <Container className='mt-10 pb-14'>
        <div className='flex gap-[80px]'>
          {/* Фильтрация */}
          <div className='w-[250px]'>
            <Filters />
          </div>

          {/* Список товаров */}
          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              <ProductsGroupList
                title='Пиццы'
                items={[
                  {
                    id: 1,
                    name: 'Бургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11ee7d61698827ee9b8db6d0aec53410.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: 'До-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11ee7d61698827ee9b8db6d0aec53410.avif',
                    price: 440,
                    items: [{ price: 440 }],
                  },
                  {
                    id: 3,
                    name: 'Док-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11ee7d61698827ee9b8db6d0aec53410.avif',
                    price: 660,
                    items: [{ price: 660 }],
                  },
                  {
                    id: 4,
                    name: 'Кранч-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11ee7d61698827ee9b8db6d0aec53410.avif',
                    price: 440,
                    items: [{ price: 440 }],
                  },
                  {
                    id: 5,
                    name: 'Док-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11ee7d61698827ee9b8db6d0aec53410.avif',
                    price: 770,
                    items: [{ price: 770 }],
                  },
                  {
                    id: 6,
                    name: 'Дон-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11ee7d61698827ee9b8db6d0aec53410.avif',
                    price: 660,
                    items: [{ price: 660 }],
                  },
                  {
                    id: 7,
                    name: 'Дол-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11ee7d61698827ee9b8db6d0aec53410.avif',
                    price: 555,
                    items: [{ price: 555 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title='Комбо'
                items={[
                  {
                    id: 1,
                    name: 'Бургер-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11ee7d61698827ee9b8db6d0aec53410.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: 'До-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11ee7d61698827ee9b8db6d0aec53410.avif',
                    price: 440,
                    items: [{ price: 440 }],
                  },
                  {
                    id: 3,
                    name: 'Док-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11ee7d61698827ee9b8db6d0aec53410.avif',
                    price: 660,
                    items: [{ price: 660 }],
                  },
                  {
                    id: 4,
                    name: 'Кранч-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11ee7d61698827ee9b8db6d0aec53410.avif',
                    price: 440,
                    items: [{ price: 440 }],
                  },
                  {
                    id: 5,
                    name: 'Док-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11ee7d61698827ee9b8db6d0aec53410.avif',
                    price: 770,
                    items: [{ price: 770 }],
                  },
                  {
                    id: 6,
                    name: 'Дон-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11ee7d61698827ee9b8db6d0aec53410.avif',
                    price: 660,
                    items: [{ price: 660 }],
                  },
                  {
                    id: 7,
                    name: 'Дол-пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:233x233/11ee7d61698827ee9b8db6d0aec53410.avif',
                    price: 555,
                    items: [{ price: 555 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
