import { Button, Input } from '@gear-js/ui';
import { useState } from "react";
import { useAlert } from '@gear-js/react-hooks';
import { useForm } from 'react-hook-form';
import { useIPFS, useSendNFTMessage } from 'hooks';
import { getMintPayload } from 'utils';
import styles from "./Register.module.scss";

type Values = { waterFlow: number, ph: number, residence: String };
const defaultValues = { water_flow: 0, ph: 0, residence: '' };


function Register() {
	const { formState, register, handleSubmit, reset } = useForm<Values>({ defaultValues });
	const { errors } = formState;

	const alert = useAlert();
	const ipfs = useIPFS();
	const sendMessage = useSendNFTMessage();

	const onSubmit = async (data: Values) => {
		const { waterFlow, ph, residence } = data;

		console.log(waterFlow);
		console.log(ph);
		console.log(residence);

		const jsonData = JSON.parse('{ wf: waterFlow, ph_data: ph, res: residence }');

		console.log(jsonData);

		const details = '';

		ipfs
		.add(jsonData)
		.then(({ cid }) => cid)
		.then(async (jsonCid) => (details ? { detailsCid: (await ipfs.add(details)).cid, jsonCid } : { jsonCid }))
		.then(({ jsonCid, detailsCid }) => getMintPayload('Test 1', 'This is a test', jsonCid, detailsCid))
		.then((payload) => sendMessage(payload, { onSuccess: reset }))
		.catch(({ message }: Error) => alert.error(message));

	};

	return (
		<>
      <h2 className={styles.heading}>Record</h2>
      <div className={styles.main}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.item}>
            <Input label="Water Flow" className={styles.input} {...register('waterFlow', { required: 'Water flow is required' })} />
            <p className={styles.error}>{errors.waterFlow?.message}</p>
          </div>

          <div className={styles.item}>
            <Input label="Ph" className={styles.input} {...register('ph', { required: 'Ph is required' })} />
            <p className={styles.error}>{errors.ph?.message}</p>
          </div>

		  <div className={styles.item}>
		  	<Input label="Residence" className={styles.input} {...register('residence', { required: 'Residence is required' })} />
            <p className={styles.error}>{errors.residence?.message}</p>
          </div>

          <Button type="submit" text="Submit" className={styles.button} block />
        </form>
      </div>
    </>
	);
}
export { Register };
