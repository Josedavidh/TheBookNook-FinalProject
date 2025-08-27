import {Link, useNavigate} from "react-router-dom"
export const Faq = () => {
  return (
    <div className="container py-1">
      <div className="col-12 text-center py-3 my-3 bg-dark text-white">
        <h2>Frequently Asked Questions</h2>
      </div>
      <ul className="ps-3 list-unstyled">
        <li className="mb-4">
          <h4 className="mb-2">How long does it take for my order to arrive?</h4>
          <p>
            Delivery times vary depending on your location. On average, orders are delivered within 3 to 7 business days 
            after payment is confirmed. You will receive an email with the tracking number once your order has been shipped.
          </p>
        </li>

        <li className="mb-4">
          <h4 className="mb-2">Can I exchange or return a product?</h4>
          <p>
            Yes, we accept exchanges and returns within the first 15 days after receiving your order, as long as the product is in 
            perfect condition and unused. Please refer to our {" "}
            <Link
              to="/cancellation-policy"
              className="text-decoration-underline text-primary"
            >
              Cancellation Policy
            </Link>
            {" "}
            for more details.
          </p>
        </li>

        <li className="mb-4">
          <h4 className="mb-2">¿Qué métodos de pago aceptan?</h4>
          <p>
            Aceptamos pagos con tarjetas de crédito, débito, transferencias
            bancarias y plataformas de pago como PayU o MercadoPago, dependiendo
            de tu ubicación.
          </p>
        </li>

        <li className="mb-4">
          <h4 className="mb-2">¿Cómo puedo rastrear mi pedido?</h4>
          <p>
            Una vez que tu pedido sea despachado, recibirás un correo
            electrónico con el número de seguimiento y un enlace para rastrear
            el estado de tu envío en tiempo real.
          </p>
        </li>

        <li className="mb-4">
          <h4 className="mb-2">
            ¿Puedo modificar mi pedido una vez realizado?
          </h4>
          <p>
            Si necesitas hacer algún cambio, contáctanos lo antes posible.
            Haremos lo posible por ayudarte, pero una vez que el pedido ha sido
            enviado, no es posible realizar modificaciones.
          </p>
        </li>

        <li className="mb-4">
          <h4 className="mb-2">¿Tienen tienda física?</h4>
          <p>
            Actualmente operamos únicamente en línea para ofrecerte precios más
            competitivos y llegar a más lugares. Sin embargo, ocasionalmente
            participamos en ferias y eventos. ¡Síguenos en redes sociales para
            más información!
          </p>
        </li>
      </ul>
    </div>
  );
};
