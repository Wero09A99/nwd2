import {Box, Stepper, Step, StepLabel} from "@mui/material";

const steps = [
    'Carrito de compras',
    'Pagar Productos',
    'Finalizar compra',
];

const StepperCart = () => {

    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 2, marginBottom: 2 }}>
            <Box sx={{ width: '65%' }}>
                <Stepper activeStep={0} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label} onClick={() => console.log("XD", label)}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
        </Box>
    )
}

export default StepperCart;