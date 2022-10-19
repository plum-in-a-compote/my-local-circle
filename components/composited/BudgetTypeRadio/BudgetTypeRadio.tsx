import { ChangeEventHandler, Fragment, useCallback, useState } from 'react';
import { Radio } from '../../generic/Radio/Radio';

export const BudgetTypeRadio = () => {
  const [checked, setChecked] = useState(true);

  const handleRadioChange: ChangeEventHandler<HTMLInputElement> = useCallback(() => {
    setChecked((previousChecked) => !previousChecked);
  }, []);

  return (
    <Fragment>
      <Radio
        className="border-x border-t rounded-t"
        name="budgetType"
        label="Narzucony z góry"
        description="Budżet narzucony z góry jest odpowiednim rozwiązaniem np. dla samorządów."
        value="static"
        checked={checked}
        onChange={handleRadioChange}
      />
      <Radio
        className="border-x border-b rounded-b"
        name="budgetType"
        label="Progresywny"
        description="Budżet progresywny jest bardzo użyteczny przy prowadzeniu składek na dane projekty."
        value="progressive"
        checked={!checked}
        onChange={handleRadioChange}
      />
    </Fragment>
  );
};
