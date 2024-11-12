export interface ModalM{ 
    isOpen?: boolean;    
    action?: () => void;
    close?: () => void;
    real?: number;
    expected?: number;
}