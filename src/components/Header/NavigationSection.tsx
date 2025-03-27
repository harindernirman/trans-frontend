import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const NavigationSection = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Policy</NavigationMenuLink>
            <NavigationMenuLink>Team</NavigationMenuLink>

            <NavigationMenuLink>Market</NavigationMenuLink>

            <NavigationMenuLink>Contact</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services11</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Policy1</NavigationMenuLink>
            <NavigationMenuLink>Team1</NavigationMenuLink>

            <NavigationMenuLink>Market1</NavigationMenuLink>

            <NavigationMenuLink>Contact1</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Policy</NavigationMenuLink>
            <NavigationMenuLink>Team</NavigationMenuLink>

            <NavigationMenuLink>Market</NavigationMenuLink>

            <NavigationMenuLink>Contact</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Policy</NavigationMenuLink>
            <NavigationMenuLink>Team</NavigationMenuLink>

            <NavigationMenuLink>Market</NavigationMenuLink>

            <NavigationMenuLink>Contact</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationSection;
