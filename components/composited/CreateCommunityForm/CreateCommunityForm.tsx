import { FormEventHandler, useRef, useState } from 'react';
import { useUser } from '../../../hooks/useUser';
import { Community, CommunityFieldsSch } from '../../../validators/Community';
import { Button } from '../../generic/Button/Button';
import { Input } from '../../generic/Input/Input';
import { Text } from '../../generic/Text/Text';
import { Textarea } from '../../generic/Textarea/Textarea';

type CreateCommunityFormProps = {
  onSubmit: (fields: CommunityFieldsSch) => void;
};

export const CreateCommunityForm = ({ onSubmit }: CreateCommunityFormProps) => {
  const { data: user } = useUser();
  const formRef = useRef<HTMLFormElement>(null);
  const [inputErrorMessage, setInputErrorMessage] = useState(false);

  // return some code from server
  const [nameNotUnique, setNameNotUnique] = useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const result = CommunityFieldsSch.safeParse({
      name: formData.get('name'),
      city: formData.get('city'),
      address: formData.get('address'),
      description: formData.get('description'),
      adminId: user?.id,
    });

    if (result.success) {
      onSubmit(result.data);
      setInputErrorMessage(false);
      return;
    }

    setInputErrorMessage(true);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4 sm:col-end-2">
      <Input name="name" label="Nazwa" type="text" placeholder="SKS ZS3 Ostrowiec" />
      <Input
        name="city"
        label="Miejscowość / Miasto / Region"
        type="text"
        placeholder="Ostrowiec Św."
      />
      <Input name="addres" label="Dokładny adres" type="text" placeholder="Ostrowiec Św." />
      <Textarea name="description" label="Opis" />
      <Button type="submit" content="Utwórz lokalną społeczność" variant="primary" />
    </form>
  );
};
