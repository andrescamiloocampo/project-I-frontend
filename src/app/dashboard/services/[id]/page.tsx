import React from 'react'
import { EstimationForm } from '@/app/components/Forms/EstimationForm/EstimationForm';
import styles from './pageStyles.module.css';
import EstimationServicePage from '@/app/components/Pages/EstimationService/EstimationServicePage';

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
            <EstimationServicePage/>
        )}
    </div>
  )
}

export default Service