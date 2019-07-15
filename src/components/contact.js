import React, { Component } from 'react';
import {Grid, Cell, ListItem, ListItemContent, List} from 'react-mdl';
import { CANCELLED } from 'dns';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col ={6}>
                    
                    <h2>Jovan Hunting</h2>
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxATERUTEhMSFRUTFRcXGBUVGRUYFRUXFRUaFxcaHRcYHSggGh0mGxgTITEiKCsrLi4uFx8zODMtNygtOisBCgoKDg0OGhAQGi8lICYtLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAQEAxAMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xABFEAACAgIAAwUCCwQHBwUAAAABAgADBBEFEiEGEzFBUWFxBxQiIzJCUmKBkZJygqGxJDNDU6KzwRY0VHOD0fBjZJOjsv/EABsBAQACAwEBAAAAAAAAAAAAAAAEBQIDBgEH/8QANxEBAAIBAgQDBQcDAwUAAAAAAAECAwQRBRIhMUFRYRMiMnGRBhRCgaGx0RXB8CNi4SQzNFJT/9oADAMBAAIRAxEAPwDuMBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQMaXoWZQyll1zKCOZebw2PEb0de6B7BgfYCAgICAgICAgICAgICAgICAgICBE/wC0mJ8a+J96vf6B5CGHivMFDa5S3KObl3vXXU8Fdq7eavY3VpXhG6yhMrnPSyolSbFI0tbOrqrb8VG/pCaY1GOcs4d/ejqznHMV5vBDY3GuJL/T073ITI5/6F0ASpt/FWQHXKwAQv16ixj9USvji2KNRbFadojx9fFt+7zyRaHynhd+J3WXSvfZaknJ0Qpy1u/rV5j0HK3Kyb8BXrwJlfpuM76m3tJ9ye3o3X03uRt3eO6ycW2viDLZkZDuy5KVbPNVcukrrUnQSpxTo9OnOx8TJGl4xXLqbVvO1PD8v5YX08xSJjuz1caycLIryc6+x68lbEspQFqqrdd5QlKAb3pbK9+Lsw35al6LiddTkvWOkR2+Xi15ME0rE+aV7L9pc27ONOQlKI+M961oCXp5bURFezenYhm3oAAr03JmDU0zc007R0382GTHNNt15khrICAgICAgICAgICAgICAgVzj3a1MbISg032bqNztUFbu6w4Qtyb530SN8oJAmM2iO4qdvFL8vJvysHKJXHapKF5j8VuHdCy1XUeJYvy83ipQehlZreJRpc1K26xPfzhIx4eeszHd9xeDvcl75INVuTk9+O7cF6CgVaStg6cyhB7OpHhuU2s4t/wBVXJgnpEbdfFJ
                    x6f3OWyWweHV1ULQBzIihdPpi3qW34knZPtMqMupvkyzlmes9UitIisV8G2BI8zv1bCeBAxZQ+T7tTdhmYseLS7MADizerYI1+5kdf/2s7Dg0/wClMeqv1vxwv8uEIgICAgICAgICAgICAgICBU+21fd2YmYP7C4VWH/0crVZ37BZ3LfumaNRj58cw9rO0vtlIRioAHU+HTxnz/U1muSYt4LjHO9YmHmaGwgICAgY8j6JmzH8QjODty8Xxz9vEyk/Kyh/9DOu4JPuXj1hA10day6JLxBICAgICAgICAgICAgICAgaHHuHLk411DeFtbJv0LDQPvB0fwngrPCcw34tFzdHZOWwfZtrPJYPwdWH4TiuMYOTLustLfeNmxKdLICAgIHm36J90zp0tB4oUPy8Q4e3rdbWfdZjWED9SLOo4Jb37R6f3Q9dHuw6TOjVxAQEBAQEBAQEBAQEBAQEBApPDq+7vzsboAly5FY+5krzN/8Aat/5yg43g5qbx/myVprbWbM5BZkBAQEAwnsd4kV3jNnIcez+6zMY79A9oqb/AA2NOj4PbbUbecI+rjfG6fOqVRAQEBAQEBAQEBAQEBAQEBAqXGU7vilD+WTjXUt7WpZba/8AC18gcQpFsMtmKdrE4K3dcQTF61crJsQjlpssB86ynMD+yzL7PDck4cFcvTm2n13a7X5fDo1n4u3gMXLJ9ORB/FnAm37lETtOSv1n+GMZd+0S8jit3T+jOB57ernH7oOj+qZzo8e3/cj6dGUWt5JRGBGxIExNZ2Zq52uU/FMgr9JK2df2qvnF/iolvw6+2ek/JhnjfHLpuPcHRXHgyhh7iNidqpmSAgICAgICAgICAgICAgICBTe07gcRxTYQEGNkmst0Xvt1A9T9bujZr2FpA4lW86eYp3bMO0XjdrXPl8xC10oB52OzN+hF0P1Tj7YdPj+O0zPpHRZxa1u3Zr3jN8DZQoPiUrcsPdzPoH3g+6ZY/uvlMz8+n7PeW8+P6PXZ+y1si3mJFeJWqrpiTY9q8xZ9gdVQL08PnCfTVjXFjphnLWOtvTtt4Qj3mefkmej1Zx7H5iqubXB0UoR7mB9oqB5fx1K7FwzVZusV6evRunPSvTdCZva6r44mEMfJ+MWa0jCtN8y8w2Xca2PWWWHgeePimGv75WOyRNmVVk0C2iyqu7vKzzNSys4Q2prkckNquz3g+wT3WcMnFp7WnaZjrv6FdTF77RDdzqQ3Mp8HBB9zDRlVprbcs+UpcxvXZOdgMg2cNxC3VhQiN+1UO7b/ABKZ30TvG6inosE9CAgICAgICAgICAgICAgIFO+EHIqV8BbigrOX3jF9a3TTY6AfeL8mgOp1qac8WnHaK93te/VD8e4rnV475FGDbYq6PzhKOwYgbWkA2EDezzBTrc53DwG955sttvSE22riI2rDe4DwbNysau6+845tQMaUoVWr310TaW6/gPdLHHwXS08Jn82qdVkY8XstUme1OTbbkV5FItRLCFreyk93aGSsKj/IbHIDA+DHy6WOLBjx1itY7NNslrTvK9Y2OlahUVUUeCqAqj3AdBNzBpXcCxWyFymprN6DlW0qOdR18D+J6+0wILtlYHycKkfSrsfJf7qJTZSu/Tme4a9eVvSVfGMlaaW0T49G/TVmbwwZY8DONwSt4Z/g2sAoyKf7jMvH4WsMhf4WzvtJfmwUt6KXNG15+a3yQ1kBAQEBAQEBAQEBAQEBAQIHthi2NVXdSneW4ly3rX5uFDJYq/eNb2cv3tQNrG4/ivinLWxTSqM7P9gICWDDxVhogqeoI1PBCPxriFnVEx8dT1UXB7rtH7aIyKh9nM2pU6njODDM17zCRj09rdWhn4WReUa3KfnpbnrNSV1qlnKVDaPMx6MwKltEEgiVV/tBk3jlrER+6RGjjbrKSxu099Y5cnGdyB/W43K9ba8+7ZhYhPppgPtGW+Di+my13m20+Uo99Nes+ZkdrLX+TjYl2z9fI5aql6+Y2bG9wXr6iZZeK6bHXfm3nyh5XT3mezSwMIoXssfvLrSDZaRrm19FVX6iKCQq+0kkkknlNfr76u+89Kx2hYYcMY4Zc0nkJCliOoVdbJ9Bvp+ci4Nufa07Q2zOyu8K43Zg5OQ9gx3S3u7LqqbS2RjhE5DZ3ZUc45QpIGiAvTmnZaDVUjHWnXbwmY6K3PSbW5v2dTptVlDKQVYAgjwII2CPwlsivcBAQEBAQEBAQEBAQEBAQEDmXaPszW+bmIpat8miu9HV7FBdCarA6KwWxNihiCD9I+sr9fntgrF47eMejbirFp2bI43YB87i5Is+stad4hPmVsB1yny3o+oE5O+kre82pkrMes/2WNb7RttL3h5OTYdtSaU8g7KbCfaqEqo17SfYJhkx6fHG0X5p9I6M6zM94SgkCWwgICe+IpuX8Wx3s7pg99odO4Qhrb7XcuNqOuwWYbPQKx2dCdJp4z6mKV26Rt18IiEa848cb79XTOzHD2x8PHoc7amiutiPAlECn+InUqtJwEBAQEBAQEBAQEBAQEBAQKp2rULm4Nn2/jOOfdZT3388cSDxGvNprNmKdrw8z5+uSAgIGPIvRFLuyoqjZZiAoA8yT0E2Y8d8ltqRvLGZ26yr+TxS+5kfDR2rrYc7vtUuQnTLWhHMxA+UH6Dp0LAmWePT
                    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"
                    alt="avatar"
                    style={{height: '250px'}}                    
                    />
                    <p style={{width: '75%', margin:'auto', paddingTop:'1em'  }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                    ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    
                    </Cell>
                <Cell col ={6}>
                    
                   <h2> Contact Me</h2>
                    <hr/>

<div className="contact-list">
<List>
  <ListItem>
    <ListItemContent style={{fontSize:'25px' , fontFamily:'anton' }}>
        <i className="fa fa-phone-square" aria-hidden="true"/>
        07498 068 705
        </ListItemContent>
  </ListItem>

  <ListItem>
  <ListItemContent style={{fontSize:'25px' , fontFamily:'anton' }}>
        <i className="fa fa-github" aria-hidden="true"/>
        
        </ListItemContent>
  </ListItem>

  <ListItem>
  <ListItemContent style={{fontSize:'25px' , fontFamily:'anton' }}>
        <i className="fa fa-envelope" aria-hidden="true"/>
       Yung_knotz@live.co.uk
        </ListItemContent>
  </ListItem>

  <ListItem>
  <ListItemContent style={{fontSize:'25px' , fontFamily:'anton' }}>
        <i className="fa fa-skype" aria-hidden="true"/>
        my Skype ID
        </ListItemContent>
  </ListItem>

</List>
     </div>
                
                </Cell>
            </Grid>
            </div>
        )
    }
}

export default Contact;