export const IoSocketStatus = () => import('../..\\node_modules\\nuxt-socket-io\\lib\\components\\SocketStatus.js' /* webpackChunkName: "components/io-socket-status" */).then(c => wrapFunctional(c.default || c))
export const AskedService = () => import('../..\\components\\AskedService.vue' /* webpackChunkName: "components/asked-service" */).then(c => wrapFunctional(c.default || c))
export const AskedServiceButton = () => import('../..\\components\\AskedServiceButton.vue' /* webpackChunkName: "components/asked-service-button" */).then(c => wrapFunctional(c.default || c))
export const AskServe = () => import('../..\\components\\AskServe.vue' /* webpackChunkName: "components/ask-serve" */).then(c => wrapFunctional(c.default || c))
export const Button = () => import('../..\\components\\Button.vue' /* webpackChunkName: "components/button" */).then(c => wrapFunctional(c.default || c))
export const Category = () => import('../..\\components\\Category.vue' /* webpackChunkName: "components/category" */).then(c => wrapFunctional(c.default || c))
export const EmpyMessageWindow = () => import('../..\\components\\EmpyMessageWindow.vue' /* webpackChunkName: "components/empy-message-window" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const ForgotPassword = () => import('../..\\components\\ForgotPassword.vue' /* webpackChunkName: "components/forgot-password" */).then(c => wrapFunctional(c.default || c))
export const GiveOffer = () => import('../..\\components\\GiveOffer.vue' /* webpackChunkName: "components/give-offer" */).then(c => wrapFunctional(c.default || c))
export const Home = () => import('../..\\components\\Home.vue' /* webpackChunkName: "components/home" */).then(c => wrapFunctional(c.default || c))
export const Login = () => import('../..\\components\\Login.vue' /* webpackChunkName: "components/login" */).then(c => wrapFunctional(c.default || c))
export const Message = () => import('../..\\components\\Message.vue' /* webpackChunkName: "components/message" */).then(c => wrapFunctional(c.default || c))
export const MessageUserCard = () => import('../..\\components\\MessageUserCard.vue' /* webpackChunkName: "components/message-user-card" */).then(c => wrapFunctional(c.default || c))
export const MessageWith = () => import('../..\\components\\MessageWith.vue' /* webpackChunkName: "components/message-with" */).then(c => wrapFunctional(c.default || c))
export const Modal = () => import('../..\\components\\Modal.vue' /* webpackChunkName: "components/modal" */).then(c => wrapFunctional(c.default || c))
export const Navigation = () => import('../..\\components\\Navigation.vue' /* webpackChunkName: "components/navigation" */).then(c => wrapFunctional(c.default || c))
export const Register = () => import('../..\\components\\Register.vue' /* webpackChunkName: "components/register" */).then(c => wrapFunctional(c.default || c))
export const RegisterStatus = () => import('../..\\components\\RegisterStatus.vue' /* webpackChunkName: "components/register-status" */).then(c => wrapFunctional(c.default || c))
export const ResetPassword = () => import('../..\\components\\ResetPassword.vue' /* webpackChunkName: "components/reset-password" */).then(c => wrapFunctional(c.default || c))
export const Rezervation = () => import('../..\\components\\Rezervation.vue' /* webpackChunkName: "components/rezervation" */).then(c => wrapFunctional(c.default || c))
export const Search = () => import('../..\\components\\Search.vue' /* webpackChunkName: "components/search" */).then(c => wrapFunctional(c.default || c))
export const UserPage = () => import('../..\\components\\UserPage.vue' /* webpackChunkName: "components/user-page" */).then(c => wrapFunctional(c.default || c))
export const UserPageNavigation = () => import('../..\\components\\UserPageNavigation.vue' /* webpackChunkName: "components/user-page-navigation" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
