import { clerkMiddleware } from '@clerk/nextjs/server'
import { createRouteMatcher } from '@clerk/nextjs/server'

// Middleware function that protects routes based on authentication status
export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect(); // Protects routes matching isProtectedRoute
  if (!isPublicRoute(req)) {
    auth().protect(); // Enforces authentication on non-public routes
  }
})

// Matches routes that should require authentication
const isProtectedRoute = createRouteMatcher([
  // '/',
  '/dashboard(.*)', // Protects all routes under '/dashboard'
])

// Matches routes that should be publicly accessible
const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)',]) // Allows public access for sign-in and sign-up pages

export const config = {
  matcher: [
    // Skips Next.js internals and static files (HTML, CSS, images, etc.), unless found in search parameters
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    
    // Ensures middleware always runs for API routes
    '/(api|trpc)(.*)',
  ],
}
