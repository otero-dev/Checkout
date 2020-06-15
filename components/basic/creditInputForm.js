import { Box, InputField, SelectBox } from './index';
import CardInput from './cardInput';

const CreditInputForm = (props) => {
    return (
        <Box>
            <Box>
                <CardInput placeholder='Credit Card Number' name='card'/>
            </Box>
            <Box>
                <InputField placeholder='Security CVV Code'/>
            </Box>
            <Box display='flex' justifyContent='space-between'>
                <Box width='48%'>
                    <SelectBox>
                        <option value="0">Exp Month</option>
                        <option value="01">01 - January</option>
                        <option value="02">02 - February</option>
                        <option value="03">03 - March</option>
                        <option value="04">04 - April</option>
                        <option value="05">05 - May</option>
                        <option value="06">06 - June</option>
                        <option value="07">07 - July</option>
                        <option value="08">08 - August</option>
                        <option value="09">09 - September</option>
                        <option value="10">10 - October</option>
                        <option value="11">11 - November</option>
                        <option value="12">12 - December</option>
                    </SelectBox>
                </Box>
                <Box width='48%'>
                    <SelectBox>
                        <option value="0">Exp Year</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                        <option value="2029">2029</option>
                        <option value="2030">2030</option>
                        <option value="2031">2031</option>
                        <option value="2032">2032</option>
                        <option value="2033">2033</option>
                        <option value="2034">2034</option>
                    </SelectBox>
                </Box>
            </Box>
        </Box>
    )
}
export default CreditInputForm;