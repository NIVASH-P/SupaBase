import { Container,Box } from "@mui/material"
import MiniDrawer from "./maindash"

export default function Insurance()
{
    return(
        <div>
            <MiniDrawer/>
        <Container component="main" maxWidth="xs"style={{
            
            position: "absolute",
            top: "65%",
            left: "40%",
            width:'800px',
            transform: "translate(-50%,-50%)",
            marginTop:"140px"
        }}>
            <Box sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width:'800px',
                backgroundColor: "#fffb",
            backdropFilter: "blur(12px)",           
                
            }}>
                <h1 >Insurance</h1>
            <p>
            Bank deposits are not risk-free. What if your bank goes bankrupt? The Deposit Insurance and Credit Guarantee Corporation (DICGC), a subsidiary of the Reserve Bank of India (RBI), runs a deposit insurance scheme that provides insurance for all bank deposits.
            </p>
            <p>
The maximum limit per bank account is Rs 5 lakh. So in case of bankruptcy, if a person holds over Rs 5 lakh with one bank, they are only entitled to Rs 5 lakh, including principal and interest.
</p>
<p>


For insurance coverage, deposits held in different bank branches are combined, and up to Rs five, lakh will only be payable under insurance coverage.

Deposit insurance is calculated by adding all funds held in the same ownership type at the same bank. So, if the funds are in different types of ownership or deposited into other banks, they would be separately insured.
This scheme covers all commercial banks, including branches of foreign banks that operate in India, local area banks, and regional rural banks. Also, a state, central or urban co-operative bank whose local cooperative societies act has been amended so that the RBI can make administrational changes falls under the scope of this insurance. The DICGC does not insure primary cooperative societies. Any amount due for any deposit received outside India is also covered.

The deposit insurance scheme is compulsory; no bank can withdraw from it. In addition, DICGC provides printed leaflets to insured banks. The depositor should ask the branch for this leaflet if, in doubt, if a bank falls under insurance coverage. The DICGC will pay the amount of each depositor within two months of the receipt of the liquidator's claim list.
</p>

            </Box >
        </Container>
        </div>
    )
}