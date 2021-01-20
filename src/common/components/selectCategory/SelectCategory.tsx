import React, { useEffect } from 'react';
import { useStoreActions, useStoreState } from '../../../store/store';
import { useHistory, useParams } from 'react-router-dom';

interface Props {}
interface Params {
  skill?: string;
}

export const SelectCategory: React.FC<Props> = () => {
  const { skill } = useParams<Params>();
  const history = useHistory();

  const { selectCategory } = useStoreActions((actions) => actions.offersState);
  const { selectedCategory, categories } = useStoreState(
    (state) => state.offersState,
  );

  const onChange = (e: React.SyntheticEvent<HTMLSelectElement>) => {
    const value: string = e.currentTarget.value;

    history.push(`/${encodeURIComponent(value)}`);
  };

  useEffect(() => {
    selectCategory(skill ? decodeURIComponent(skill) : null);
  }, [skill, selectCategory]);

  return (
    <div>
      <select onChange={onChange} defaultValue={selectedCategory ?? ''}>
        <option value={''}>-</option>
        {categories.map((c) => (
          <option key={c.type} value={c.value}>
            {c.type} ({c.offers})
          </option>
        ))}
      </select>
    </div>
  );
};
