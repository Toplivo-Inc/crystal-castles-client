import * as React from "react"
import ThemeToggle from "@/components/ui/themeToggle"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Checkbox } from "@/components/ui/checkbox"
import { TooltipProvider } from "@radix-ui/react-tooltip"

export default function Home() {
  return (
    <div className="demo-background min-h-screen p-6 text-white space-y-8">
      <div className="flex justify-center">
        <ThemeToggle />
      </div>
      
      <Card className="max-w-2xl mx-auto backdrop-blur-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            OLEG KLIMENKO PRESENT
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 backdrop-blur-xl">
                <Label className="text-white/90">SWITCH</Label>
                <Switch />
              </div>
              
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 backdrop-blur-xl">
                <Label className="text-white/90">checkBOX</Label>
                <Checkbox />
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-white/90">выбери значение</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="one">олег</SelectItem>
                    <SelectItem value="two">олег клименко</SelectItem>
                    <SelectItem value="three">олег костин</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label className="text-white/90">Input field</Label>
                <Input placeholder="Вводить тут..." />
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="tab1" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2 rounded-2xl bg-white/10 backdrop-blur-xl p-1">
              <TabsTrigger value="tab1" className="rounded-xl data-[state=active]:bg-white/20">
                Таб 1
              </TabsTrigger>
              <TabsTrigger value="tab2" className="rounded-xl data-[state=active]:bg-white/20">
                Таб 2
              </TabsTrigger>
            </TabsList>
            <TabsContent value="tab1" className="p-4 rounded-2xl bg-white/5 backdrop-blur-xl">
              <p className="text-white/80">это первый таб</p>
            </TabsContent>
            <TabsContent value="tab2" className="p-4 rounded-2xl bg-white/5 backdrop-blur-xl">
              <p className="text-white/80">это второй таб</p>
            </TabsContent>
          </Tabs>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="glass">Диалоговое окно</Button>
              </DialogTrigger>
              <DialogContent className="liquid-dialog border-white/30">
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    Стеклянный диалог
                  </h3>
                  <p className="text-white/70">это окно стеклянное как на АЙФОНЕ 26</p>
                  <div className="flex gap-3 justify-center">
                    <DialogTrigger asChild>
                      <Button variant="outline">Закрыть</Button>
                    </DialogTrigger>
                    <Button variant="primary">Вперед</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            
            <TooltipProvider delayDuration={300}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="secondary">Наведи на меня</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>pidoriii</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="glass">Glass</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}