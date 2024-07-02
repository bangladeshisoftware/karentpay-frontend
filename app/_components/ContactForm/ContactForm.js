import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

export default function CardWithForm() {
  return (
    <Card className='max-w-[800px] w-full mx-auto transition duration-300 hover:shadow-lg hover:border-blue-500'>
      <CardHeader>
        <CardTitle>User Information</CardTitle>
        {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
      </CardHeader>
      <CardContent>
        <form>
          <div className='grid w-full items-center gap-4'>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='name'>Name</Label>
              <Input id='name' placeholder='Full Name' />
            </div>

            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='email'>
                Email <span className='text-red-500 '>*</span>
              </Label>
              <Input
                type='email'
                id='email'
                placeholder='Email Address'
                required
              />
            </div>

            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='phone'>
                Phone <span className='text-red-500 '>*</span>
              </Label>
              <Input
                type='text'
                id='phone'
                placeholder='Active Phone Number'
                required
              />
            </div>

            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='address'>Address</Label>
              <Input type='text' id='name' placeholder='Specific Address' />
            </div>

            {/* <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='framework'>Framework</Label>
              <Select>
                <SelectTrigger id='framework'>
                  <SelectValue placeholder='Select' />
                </SelectTrigger>
                <SelectContent position='popper'>
                  <SelectItem value='next'>Next.js</SelectItem>
                  <SelectItem value='sveltekit'>SvelteKit</SelectItem>
                  <SelectItem value='astro'>Astro</SelectItem>
                  <SelectItem value='nuxt'>Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div> */}
          </div>
        </form>
      </CardContent>
      <CardFooter className='flex justify-between gap-2'>
        <Button className='bg-gray-500 w-1/2 justify-center text-white' variant='outline '>
          Cancel
        </Button>
        <Button type='submit' className='bg-gradient-2 w-1/2 justify-center'>
          Send
        </Button>
      </CardFooter>
    </Card>
  );
}
