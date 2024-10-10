import React from 'react'
import { EstimationForm } from '@/app/components/Forms/EstimationForm/EstimationForm';
import styles from './pageStyles.module.css';

interface Props {
	params: {
		id: string;
	};
}

function Service({params}:Props) {
    const {id} = params;
  return (
    <div className={styles.mainPage}>
        {id === '1' && (
            <EstimationForm/>
        )}
    </div>
  )
}

export default Service