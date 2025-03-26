import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { apiRequest } from "@/lib/queryClient";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { contactFormSchema, type ContactFormData } from "@shared/schema";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. We will get back to you soon.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Would you like to be Cloud Native too?"
          description="Get in touch with our team of experts to discuss your cloud needs"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-montserrat font-bold mb-6">Drop us a line</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your email</FormLabel>
                      <FormControl>
                        <Input {...field} type="email" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea {...field} rows={5} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="bg-neutral-100 border border-gray-300 rounded-md p-4 flex items-center justify-between mb-4">
                  <span className="text-neutral-600">I'm not a robot</span>
                  <div className="w-8 h-8">
                    {/* reCAPTCHA would be implemented here in production */}
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-primary text-white hover:bg-primary/80 py-3 px-8 rounded-md shadow-md transition duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>

          <div>
            <h3 className="text-2xl font-montserrat font-bold mb-6">Where to find us</h3>
            <Card className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="http://www.virtuosity-global.com/wp-content/uploads/2024/03/VS-Contact.png" 
                alt="Virtuosity Contact Information" 
                className="w-full"
              />
              <div className="h-64 bg-neutral-100 flex items-center justify-center text-neutral-600">
                Interactive Map Location
              </div>
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <MapPin className="text-primary mt-1 mr-3" />
                  <span>Level 15-2, Q Sentral, 2A Jalan Stesen Sentral 2, KL Sentral, 50470 Kuala Lumpur, Malaysia</span>
                </div>
                <div className="flex items-start mb-4">
                  <Phone className="text-primary mt-1 mr-3" />
                  <span>+60 3 2725 8018</span>
                </div>
                <div className="flex items-start">
                  <Mail className="text-primary mt-1 mr-3" />
                  <span>info@virtuosity-global.com</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
