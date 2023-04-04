import { Container } from './styles'
import * as Label from '@radix-ui/react-label';

export function Input({ htmlFor, fieldName, ...rest }){
    return(
        <Container>
            <Label.Root htmlFor={htmlFor}>
                {fieldName}
            </Label.Root>
            <input {...rest} />
        </Container>
    )
}