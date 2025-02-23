import React from 'react';
import { Title } from './title';
import { CheckboxFiltersGroup, FilterCheckbox, RangeSlider } from './';
import { Input } from '../ui';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text='Фильтрация' size='sm' className='mb-5 font-bold' />

      {/* Верхние чекбоксы */}
      <div className='flex flex-col gap-4'>
        <FilterCheckbox text='Можно собирать' value='1' />
        <FilterCheckbox text='Новинки' value='2' />
      </div>

      {/* Фильтр цен */}
      <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
        <p className='font-bold mb-3'>Цена от и до:</p>
        <div className='flex gap-3 mb-5'>
          <Input type='number' placeholder='0' min={0} max={1000} defaultValue={0} />
          <Input type='number' placeholder='1000' min={0} max={1000} />
        </div>

        <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
      </div>

      {/* Фильтр ингридиентов */}
      <CheckboxFiltersGroup
        className='mt-5'
        title='Игридиенты'
        limit={6}
        defaultItems={[
          { text: 'Сырный соус', value: '1' },
          { text: 'Моцарелла', value: '2' },
          { text: 'Чеснок', value: '3' },
          { text: 'Соленые огурчики', value: '4' },
          { text: 'Красный лук', value: '5' },
          { text: 'Томаты', value: '6' },
        ]}
        items={[
          { text: 'Сырный соус', value: '1' },
          { text: 'Моцарелла', value: '2' },
          { text: 'Чеснок', value: '3' },
          { text: 'Соленые огурчики', value: '4' },
          { text: 'Красный лук', value: '5' },
          { text: 'Томаты', value: '6' },
          { text: 'Сырный соус', value: '7' },
          { text: 'Моцарелла', value: '8' },
          { text: 'Чеснок', value: '9' },
          { text: 'Соленые огурчики', value: '10' },
          { text: 'Красный лук', value: '11' },
          { text: 'Томаты', value: '12' },
          { text: 'Сырный соус', value: '13' },
          { text: 'Моцарелла', value: '14' },
          { text: 'Чеснок', value: '15' },
          { text: 'Соленые огурчики', value: '16' },
          { text: 'Красный лук', value: '17' },
          { text: 'Томаты', value: '18' },
        ]}
      />
    </div>
  );
};
