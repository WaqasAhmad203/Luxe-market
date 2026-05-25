# Email Notification Setup

This document outlines the email notification system for the LuxeMarket marketplace.

## Email Service Configuration

### Recommended Email Services
- **SendGrid**: Enterprise-grade email delivery
- **Resend**: Modern email API for developers
- **AWS SES**: Cost-effective for high volume
- **Mailgun**: Reliable transactional emails

### Environment Variables
Add these to your `.env` file:

```env
# Email Service Configuration
EMAIL_SERVICE=sendgrid
EMAIL_FROM=noreply@luxemarket.com
EMAIL_FROM_NAME=LuxeMarket

# SendGrid Configuration
SENDGRID_API_KEY=your_sendgrid_api_key_here

# OR Resend Configuration
RESEND_API_KEY=your_resend_api_key_here
```

## Email Templates

### 1. Order Confirmation
**Trigger**: When a customer places an order
**Recipients**: Customer
**Subject**: "Order Confirmed - #{orderId}"

**Content**:
- Order number and date
- Itemized list with images
- Shipping address
- Payment summary
- Estimated delivery date
- Track order link

### 2. Order Shipped
**Trigger**: When vendor marks order as shipped
**Recipients**: Customer
**Subject**: "Your Order Has Shipped - #{orderId}"

**Content**:
- Shipping confirmation
- Tracking number and carrier
- Estimated delivery date
- Track shipment link
- Order details

### 3. Order Delivered
**Trigger**: When order status changes to delivered
**Recipients**: Customer
**Subject**: "Your Order Has Been Delivered - #{orderId}"

**Content**:
- Delivery confirmation
- Request for review
- Link to leave product review
- Customer support contact

### 4. New Order (Vendor)
**Trigger**: When vendor receives a new order
**Recipients**: Vendor
**Subject**: "New Order Received - #{orderId}"

**Content**:
- Order details
- Customer information
- Shipping address
- Items ordered with quantities
- Link to vendor dashboard

### 5. Vendor Application Approved
**Trigger**: When admin approves vendor application
**Recipients**: Vendor
**Subject**: "Welcome to LuxeMarket - Application Approved"

**Content**:
- Welcome message
- Getting started guide
- Link to vendor dashboard
- Support resources
- Next steps

### 6. Vendor Application Rejected
**Trigger**: When admin rejects vendor application
**Recipients**: Vendor applicant
**Subject**: "LuxeMarket Vendor Application Update"

**Content**:
- Polite rejection message
- Reason for rejection (if applicable)
- Invitation to reapply
- Contact information for questions

### 7. Product Review Notification
**Trigger**: When customer leaves a product review
**Recipients**: Vendor
**Subject**: "New Review on Your Product"

**Content**:
- Product name
- Customer name (or anonymous)
- Star rating
- Review text
- Link to product page

### 8. Low Stock Alert
**Trigger**: When product stock falls below threshold
**Recipients**: Vendor
**Subject**: "Low Stock Alert - {productName}"

**Content**:
- Product name and image
- Current stock level
- Recommended action
- Link to update inventory

### 9. Password Reset
**Trigger**: When user requests password reset
**Recipients**: User
**Subject**: "Reset Your LuxeMarket Password"

**Content**:
- Password reset link (expires in 1 hour)
- Security notice
- Contact support if not requested

### 10. Welcome Email
**Trigger**: When new user registers
**Recipients**: New user
**Subject**: "Welcome to LuxeMarket"

**Content**:
- Welcome message
- Platform overview
- Browse products link
- Account settings link
- Support contact

## Implementation Example

### Using Resend (Recommended)

```javascript
// lib/email.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendOrderConfirmation(order) {
  await resend.emails.send({
    from: 'LuxeMarket <noreply@luxemarket.com>',
    to: order.customerEmail,
    subject: `Order Confirmed - #${order.id}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #D4AF37;">Order Confirmed</h1>
        <p>Thank you for your order!</p>
        <p><strong>Order Number:</strong> ${order.id}</p>
        <p><strong>Total:</strong> $${order.total}</p>
        <!-- Add more order details -->
      </div>
    `
  });
}
```

### Email Template Component (React Email)

For better email templates, use React Email:

```bash
npm install react-email @react-email/components
```

```jsx
// emails/OrderConfirmation.jsx
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Button,
} from '@react-email/components';

export default function OrderConfirmation({ order }) {
  return (
    <Html>
      <Head />
      <Body style={{ backgroundColor: '#FAFAF9' }}>
        <Container style={{ padding: '20px' }}>
          <Section style={{ backgroundColor: '#ffffff', padding: '40px' }}>
            <Text style={{ fontSize: '24px', color: '#1F2937' }}>
              Order Confirmed
            </Text>
            <Text>Thank you for your order #{order.id}!</Text>
            <Button
              href={`https://luxemarket.com/orders/${order.id}`}
              style={{ backgroundColor: '#D4AF37', color: '#ffffff' }}
            >
              View Order
            </Button>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
```

## Email Sending Best Practices

1. **Use Transactional Email Service**: Don't use personal Gmail/Outlook
2. **Verify Domain**: Set up SPF, DKIM, and DMARC records
3. **Rate Limiting**: Implement rate limits to prevent spam
4. **Unsubscribe Link**: Include in marketing emails (not transactional)
5. **Error Handling**: Log failed email sends and retry
6. **Testing**: Test emails in different clients (Gmail, Outlook, etc.)
7. **Personalization**: Use customer names and order details
8. **Mobile Responsive**: Ensure emails look good on mobile devices

## Notification Preferences

Allow users to control which emails they receive:

- Order updates (cannot disable)
- Shipping notifications (cannot disable)
- Marketing emails (can disable)
- Product recommendations (can disable)
- Review requests (can disable)
- Newsletter (can disable)

## Next Steps

1. Choose an email service provider
2. Set up API keys in `.env`
3. Create email templates using React Email
4. Implement email sending functions in `lib/email.js`
5. Add email triggers in relevant API routes
6. Test email delivery
7. Monitor email delivery rates and bounces
